import { useEffect, useState } from "react";
import { Avatar } from "react-profile-avatar";
import { ClipLoader } from "react-spinners";
import { UserProfileDto } from "../types/accounts";
import CompleteContainer from "./CompleteContainer";
import ThemedButton from "./ThemedButton";
import { PostDto } from "../types/posts";
import { useParams } from "react-router-dom";
import accounts from "../../utils/accounts/accounts";
import toast from "react-hot-toast";
import NotFound from "../../others/Backend/StatusCodePage/NotFound";
import Posts from "../../utils/posts/Posts";
import PostDisplay from "./Post";

export default function Profile({
  isActualSessionProfile,
}: {
  isActualSessionProfile: boolean;
}) {
  const [userDto, setUserDto] = useState<UserProfileDto>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [postsAreLoading, setPostsAreLoading] = useState<boolean>(true);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [userNotExists, setUserNotExists] = useState<boolean>(false);
  const userName = useParams<{ userName: string }>();
  const [userPostsDto, setUserPostsDto] = useState<Array<PostDto>>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const getUserData = async () => {
    try {
      if (userName.userName) {
        const response = await accounts.getUserByRoute(
          encodeURIComponent(userName.userName)
        );
        if (response.status === 404) {
          setUserNotExists(true);
          return;
        }
        setUserDto(response);
      }
    } catch (error) {
      toast.error(`Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const listUserPosts = async (userName: string) => {
    try {
      const result = await Posts.loadUserPosts(userName);
      setUserPostsDto(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      setPostsAreLoading(false);
    }
  };

  useEffect(() => {
    if (userName.userName) {
      getUserData();
      listUserPosts(userName.userName);
    }
  }, [userName, userPostsDto]);

  const toggleBio = () => {
    setIsExpanded(!isExpanded);
  };

  const getShortBio = (bio: string) => {
    return bio.length > 150 ? bio.substring(0, 150) + "..." : bio;
  };

  return userNotExists ? (
    <NotFound />
  ) : (
    <section className="p-6 space-y-8">
      <div className="flex flex-wrap w-auto justify-evenly z-50">
        {isLoading ? (
          <ClipLoader color="#36D7B7" />
        ) : (
          userDto && (
            <CompleteContainer>
              <div className="flex justify-between w-full">
                <div className="flex items-center">
                  <div className="flex items-center mx-3">
                    <Avatar initials={userDto.userName[0]} size={65} />
                  </div>
                  <p className="text-xl font-semibold">{userDto.userName}</p>
                </div>
                <div className="flex space-x-4">
                  {isActualSessionProfile && (
                    <ThemedButton onClick={() => setIsEditing(!isEditing)}>
                      {isEditing ? "Cancelar" : "Editar"}
                    </ThemedButton>
                  )}
                  <ThemedButton>Compartir</ThemedButton>
                </div>
              </div>

              <div className="w-full my-5 mx-3">
                <p className="mb-2">
                  {userDto.userBio ? (
                    isExpanded ? (
                      userDto.userBio
                    ) : (
                      getShortBio(userDto.userBio)
                    )
                  ) : (
                    <p className="text-xs text-zinc-500 font-bold">
                      No hay biografía aún
                    </p>
                  )}
                </p>
                {userDto.userBio && userDto.userBio.length > 150 && (
                  <ThemedButton onClick={toggleBio}>
                    {isExpanded ? "Ver menos" : "Ver más"}
                  </ThemedButton>
                )}
              </div>
            </CompleteContainer>
          )
        )}
      </div>

      <h2 className="text-xl text-center text-gray-400 pb-4 mt-10">
        Publicaciones
      </h2>
      <div className="flex flex-col items-center space-y-4">
        {postsAreLoading ? (
          <ClipLoader color="#36D7B7" />
        ) : userPostsDto.length === 0 ? (
          <h3 className="text-md text-zinc-600 font-bold">
            Este usuario aún no ha publicado nada
          </h3>
        ) : (
          userPostsDto.map((post, key) => (
            <PostDisplay post={post} key={key} />
          ))
        )}
      </div>
    </section>
  );
}
