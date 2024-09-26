import Messages from "@/components/MessageCard";
import { Mail } from "lucide-react";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="sm:grid h-[calc(100dvh-70px)] sm:grid-cols-[400px_1fr]">
      {/* image and cover */}
      <div>
        <div className="h-[10rem] bg-[url('https://picsum.photos/800')] bg-no-repeat"></div>
        <div className="rounded-full absolute ml-[20px] -translate-y-1/2 border-white border-[4px] w-[140px] h-[140px] overflow-hidden">
          <img src="https://picsum.photos/140" alt="avatar" />
        </div>
        <div className="relative mx-[20px]  top-[90px]">
          <div className="flex justify-between">
            <div>
              <h1 className="text-xl font-bold">Abayomi Eniola</h1>
              <span className="text-gray-500">@enielect</span>
            </div>
            <Mail className="h-8 w-8" />
          </div>
          <div className="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde earum
            consequatur, nostrum amet nam et atque quos delectus inventore ad
            cumque ab eos iure sit harum animi iste repellendus nihil.
          </div>
        </div>
      </div>
      <div className="border-l mt-[100px] overflow-y-auto sm:h-[calc(100dvh-70px)] sm:mt-0 sm:block">
        <h2 className="text-center">Recent Posts</h2>
        <div className="flex flex-col items-center ">
          <Messages />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
