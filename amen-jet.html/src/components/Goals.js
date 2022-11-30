import React from "react";

function Goals() {
  return (
    <div id="goals">
      <h1 className="text-4xl font-mono text-blue-500">Goals</h1>
      <p className="text-lg font-mono mb-10">The reason we do what we do </p>
      <div className="flex justify-center">
        <div className="border-4 border-blue-500 w-4/5 rounded-full">
          <div className="p-10">
            <h1 className="font-serif text-3xl text-blue-500">Our Mission</h1>
            <p className="font-mono text-lg mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              distinctio asperiores exercitationem dignissimos quidem debitis
              molestias cupiditate ratione, suscipit, fugiat soluta vitae maxime
              dolore voluptatem. Nostrum veritatis architecto odit minima.
            </p>
          </div>
          <div className="p-10">
            <h1 className="font-serif text-3xl text-blue-500">Our Vision</h1>
            <p className="font-mono text-lg mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              distinctio asperiores exercitationem dignissimos quidem debitis
              molestias cupiditate ratione, suscipit, fugiat soluta vitae maxime
              dolore voluptatem. Nostrum veritatis architecto odit minima.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goals;
