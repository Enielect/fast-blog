import { CircleUser} from "lucide-react";
import React from "react";

const messages = [
  {
    id: 1,
    name: "Blog Name",
    time: "3:00pm",
    message: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim debitis,
          sint unde natus dolore recusandae quod incidunt. Ipsam, similique,
          labore optio, mollitia odit dolores quo modi perspiciatis odio
          dignissimos libero ab facere dolorem nostrum neque voluptatem vel
          excepturi exercitationem. Tempora iusto reprehenderit illo deserunt
          quaerat aliquid numquam, optio ducimus! Animi voluptatum amet error
          autem ad consectetur vero explicabo, corrupti, expedita aspernatur
          sunt repellat eum maiores placeat itaque doloremque quod quidem
          quisquam magni praesentium incidunt modi? Quod, excepturi? Fugiat,
          beatae ex!`,
  },
  {
    id: 2,
    name: "Blog Name",
    time: "3:00pm",
    message: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim debitis,
          sint unde natus dolore recusandae quod incidunt. Ipsam, similique,
          labore optio, mollitia odit dolores quo modi perspiciatis odio
          dignissimos libero ab facere dolorem nostrum neque voluptatem vel
          excepturi exercitationem. Tempora iusto reprehenderit illo deserunt
          quaerat aliquid numquam, optio ducimus! Animi voluptatum amet error
          autem ad consectetur vero explicabo, corrupti, expedita aspernatur
          sunt repellat eum maiores placeat itaque doloremque quod quidem
          quisquam magni praesentium incidunt modi? Quod, excepturi? Fugiat,
          beatae ex!`,
  },
  {
    id: 3,
    name: "Blog Name",
    time: "3:00pm",
    message: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim debitis,
          sint unde natus dolore recusandae quod incidunt. Ipsam, similique,
          labore optio, mollitia odit dolores quo modi perspiciatis odio
          dignissimos libero ab facere dolorem nostrum neque voluptatem vel
          excepturi exercitationem. Tempora iusto reprehenderit illo deserunt
          quaerat aliquid numquam, optio ducimus! Animi voluptatum amet error
          autem ad consectetur vero explicabo, corrupti, expedita aspernatur
          sunt repellat eum maiores placeat itaque doloremque quod quidem
          quisquam magni praesentium incidunt modi? Quod, excepturi? Fugiat,
          beatae ex!`,
  },
];

const Messages = () => {
  return [...messages, ...messages, ...messages, ...messages].map((message) => (
    <div className="flex px-2 pt-3 gap-3 border-b pb-2 cursor-pointer hover:bg-zinc-900/10" key={message.id}>
      <div className="flex-shrink-0">
        {/* <img src="https://via.placeholder.com/150" alt="profile" /> */}
        <CircleUser />
      </div>
      <div className="">
        <div className="flex justify-between">
          <h4>{message.name}</h4>
          <span>{message.time}</span>
        </div>
        <div className="mt-4 text-sm">{message.message.split(" ").slice(0, 22).join(" ")}...</div>
      </div>
    </div>
  ));
};

export default Messages;
