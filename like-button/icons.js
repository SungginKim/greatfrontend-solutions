import { HeartIcon, SpinnerIcon } from "./icons";
import { useState } from "react";

export default function App() {
    const [liked, setLiked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLike = async () => {
        setIsLoading(true);
        const url = "https://questions.greatfrontend.com/api/questions/like-button";
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ action: liked ? "unlike" : "like" }),
            });
            if (res.status >= 200 && res.status < 300) {
                setLiked(!liked);
                setError(null);
            } else {
                setLiked(false);
                const resStatus = await res.json();
                setError(resStatus.message);

                return;
            }

            console.log(await res.json())
        } finally {
            setIsLoading(false);

        }
    };



    return (
        <div>
            <button
                onClick={handleLike}
                className={`like-btn ${liked && "liked"} ${isLoading && "loading"}`}
            >
                {isLoading ? (
                    <SpinnerIcon
                        className={`spinner ${liked && "liked"} ${isLoading && "loading"}`}
                    />
                ) : (
                    <HeartIcon
                        className={`heart ${liked && "liked"} ${isLoading && "loading"}`}
                    />
                )}
                {liked ? "Liked" : "Like"}
            </button>
            <p>{error}</p>

        </div>
    );
}
