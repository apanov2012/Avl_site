import React from "react";

const SixCardsWithLink = ({ blockContent }) => {
    return (
        <div className="sixCardsWithLink ">
            {blockContent.map((card) => (
                <div
                    className="sixCardsWithLink-card bborder"
                    key={Math.random()}
                >
                    <div className="sixCardsWithLink-card-num fs-64">
                        0{card.num}
                    </div>
                    <div className="sixCardsWithLink-card-name fs-40">
                        {card.name}
                    </div>
                    <div className="sixCardsWithLink-card-text fs-16">
                        {card.text}
                    </div>
                    <div className="sixCardsWithLink-textBlock-link fs-32 ">
                        <span className="horizontalBlock-textBlock-link-name cp">
                            {card.linkName}
                        </span>
                        <div className="horizontalBlock-textBlock-link-arrow imgBack cp"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SixCardsWithLink;
