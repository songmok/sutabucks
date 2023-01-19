import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MenuItem = () => {
  const [data, setData] = useState([]);

  const checkType = [
    "콜드 브루 커피",
    "브루드 커피",
    "에스프레소",
    "프라푸치노",
    "블렌디드",
    "스타벅스 피지오",
    "티 (티바나)",
    "기타 제조 음료",
    "스타벅스 주스(병음료)",
  ];

  // useEffect(() => {
  //   axios
  //     .get("/drink.json")
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  const getPosts = async () => {
    const posts = await axios.get("/drink.json");
    setData(posts.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  console.log(data[checkType[0]]);

  const drinkData = checkType.map((item, index) => (
    <div key={item} className="coffee mb-10">
      <div>
        <span className="font-bold text-2xl md:text-4xl">{item}</span>
      </div>
      <div className="mt-5 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-5">
        {data[checkType[index]].map((item) => (
          <Link key={item.id} to="/menudetail" className="block group">
            <img
              // src="./coffee.jpg"
              src={item.img}
              alt="coffee"
              className="w-full transform hover:scale-95 transition duration-300"
            />
            <div className="relative pt-3 bg-white">
              <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                {item.title}
              </h3>
              <div className="mt-1.5 flex items-center justify-between text-gray-900">
                <p className="tracking-wide">4,000</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  ));

  return (
    <div className="container mx-auto my-10">
      {/* {checkType.map((item, index) => (
        <div key={item} className="coffee mb-10">
          <div>
            <span className="font-bold text-2xl md:text-4xl">{item}</span>
          </div>
          <div className="mt-5 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-5">
            {data[checkType[index]].map((item) => (
              <Link key={item.id} to="/menudetail" className="block group">
                <img
                  src="./coffee.jpg"
                  alt="coffee"
                  className="w-full transform hover:scale-95 transition duration-300"
                />
                <div className="relative pt-3 bg-white">
                  <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {item.title}
                  </h3>
                  <div className="mt-1.5 flex items-center justify-between text-gray-900">
                    <p className="tracking-wide">4,000</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))} */}
      {drinkData}
    </div>
  );
};

export default MenuItem;
