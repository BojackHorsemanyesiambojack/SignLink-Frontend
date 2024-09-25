import { PostDto } from '../types/posts'

export default function PostDisplay({post} : {post:PostDto}) {
  return (
    <div className="w-full p-4 bg-zinc-950 rounded-lg">
    <div className="flex justify-between">
      <p className="text-lg font-bold">{post.title}</p>
      <button className="text-zinc-500 hover:text-zinc-300 focus:outline-none">
        &#8230;
      </button>
    </div>
    <p>{post.content}</p>

    <div className="flex justify-between mt-4 text-zinc-400">
      <div className="flex space-x-6">
        <button className="flex items-center space-x-1 hover:text-zinc-300 focus:outline-none">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
          <span>Like</span>
        </button>

        <button className="flex items-center space-x-1 hover:text-zinc-300 focus:outline-none">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18 9l-6 6-6-6"
            />
          </svg>
          <span>Compartir</span>
        </button>
      </div>

      <button className="flex items-center space-x-1 hover:text-zinc-300 focus:outline-none">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 13l-7 7-7-7"
          />
        </svg>
        <span>Comentar</span>
      </button>
    </div>
  </div>

  )
}
