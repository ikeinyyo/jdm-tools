import { useMutation } from "@tanstack/react-query";

export type GeneratePostRequest = {
  system: string;
  prompt: string;
};

export type GeneratePostResponse = {
  post: string;
};

const useGeneratePost = (
  onSuccess: (
    data: GeneratePostResponse,
    variables: GeneratePostRequest
  ) => void,
  onError: (error: Error) => void
) =>
  useMutation<GeneratePostResponse, Error, GeneratePostRequest>({
    mutationFn: async function (generatePostRequest: GeneratePostRequest) {
      const response = await fetch("/api/post-generator/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(generatePostRequest),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        const errorMessage =
          errorResponse?.error?.message ||
          "Failed to create post (unknown error)";
        throw new Error(errorMessage);
      }

      return (await response.json()) as GeneratePostResponse;
    },
    onSuccess,
    onError,
  });

export default useGeneratePost;
