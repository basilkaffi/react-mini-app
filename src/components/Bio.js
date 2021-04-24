function Bio(props) {
  const { data } = props;
  return (
    <div
      className="w-1/4 flex flex-col mb-auto justify-center items-center"
      style={{ minWidth: "280px" }}
    >
      <img className="w-4/5 rounded-full" src={data.avatar_url} />
      <div className="font-montserrat text-2xl text-gray-700 font-semibold my-1">
        {data.name ? `${data.name}` : `${data.login}`}
      </div>
      <div className="font-roboto-slab text-xl text-gray-500">{data.login}</div>
      <div className="font-roboto-slab text-gray-700 my-4">{data.bio}</div>
      <div className="grid grid-cols-3 w-2/3">
        {data.following && (
          <div className="flex-col justify-center text-center text-xs self-center">
            <div className="font-roboto-slab font-semibold text-gray-600">
              {data.following}
            </div>
            <div className="font-montserrat font-semibold text-gray-600">
              following
            </div>
          </div>
        )}
        {data.followers && (
          <div className="flex-col justify-center text-center text-xs">
            <div className="font-roboto-slab font-semibold text-gray-600">
              {data.followers}
            </div>
            <div className="font-montserrat font-semibold  text-gray-600">
              followers
            </div>
          </div>
        )}
        {data.repos && (
          <div className="flex-col justify-center text-center text-xs">
            <div className="font-roboto-slab font-semibold text-gray-600">
              {data.public_repos}
            </div>
            <div className="font-montserrat font-semibold text-gray-600">
              repos
            </div>
          </div>
        )}
      </div>
      <div className="w-4/5 mt-6 items-start font-roboto-slab flex flex-col">
        {data.company && (
          <div className="flex my-1 overflow-x-hidden justify-center items-center text-gray-700">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div className="text-sm">{data.company}</div>
          </div>
        )}
        {data.location && (
          <div className="flex my-1 overflow-x-hidden justify-center items-center text-gray-700">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="text-sm">{data.location}</div>
          </div>
        )}
        {data.email && (
          <div className="flex my-1 overflow-x-hidden justify-center items-center text-gray-700">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="text-sm">{data.email}</div>
          </div>
        )}
        {data.blog && (
          <div className="flex my-1 overflow-x-hidden justify-center items-center text-gray-700">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="text-sm">{data.blog}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bio;
