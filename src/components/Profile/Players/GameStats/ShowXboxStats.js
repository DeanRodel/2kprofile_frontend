import React from "react";
import IndividualStat from "../IndividualStat";

const ShowXboxStats = ({ stats }) => {
  const platforms = {
    psn: "Playstation",
    xbl: "Xbox",
  };
  return (
    <div>
      <div className="text-white relative pb-10">
        <h3 className="font-semibold text-xl font-bold sm:text-left text-center text-gray-900">
          Xbox Live
        </h3>
        <div className="mt-2 gap-2 md:flex text-gray-400 text-base sm:text-left text-center font-semibold tracking-widest font-head">
          <p className="md:text-left text-center md:mr-8 mr-0">{stats.game}</p>
          <p className="capitalize md:text-left text-center">
            {stats.gamerTag}
          </p>
        </div>
        <div className="mt-2 gap-2 md:flex text-black text-base sm:text-left text-center font-semibold tracking-widest font-head">
          <p className="md:text-left text-center md:mr-8 mr-0">Achievements</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-5 uppercase">
          {stats.achievements.map((achievement) => (
            <div>
              <h5 className="md:text-left text-center text-gray-400 font-semibold tracking-widest font-head break-words">
                {achievement.name}
              </h5>
              <img
                src={achievement.imageUnlocked}
                alt={`${achievement.name}`}
                title={`${achievement.description}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowXboxStats;

{
  /* <IndividualStat
              type={'Achievement'}
              stat={achievement.name}
              image={achievement.imageUnlocked}
            /> */
}
