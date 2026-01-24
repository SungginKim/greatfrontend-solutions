import React from "react";
import "./styles.css";

const CollectionsGrid = ({ gridData }) => {
  return (
    <section>
      <h1>Our Collections</h1>
      <div className="grid-container">
        {gridData.map(
          (
            { collection_id, name, description, image_url, created_at },
            index,
          ) => (
            <div
              key={collection_id}
              className={`grid box-${index}`}
              style={{ backgroundImage: `url(${image_url})` }}
            >
              <p className="name">{name}</p>
              <p className="description">{description}</p>
            </div>
          ),
        )}
      </div>
    </section>
  );
};

export default CollectionsGrid;
