import { Button } from "~/components/Button";
import { RouterInput, trpc } from "../utils/trpc";
import { SubmitHandler, useForm } from "react-hook-form";

type CreateIdea = RouterInput["idea"]["createIdea"];

const useIdea = () => {
  const { register, handleSubmit } = useForm<CreateIdea>();
  const create = trpc.idea.createIdea.useMutation();

  const handleCreateIdea: SubmitHandler<CreateIdea> = (data) => {
    create.mutate({
      url: data.url,
      description: "test",
      submittedBy: "devin",
      ideaName: "test",
      tagline: "omg",
      twitterAccount: "devinmcgloin",
    });
  };

  return {
    register,
    handleCreateIdea: handleSubmit(handleCreateIdea),
  };
};

export default function Submit() {
  const { handleCreateIdea, register } = useIdea();

  return (
    <div className="flex">
      <section className="flex-1">img</section>
      <section className="flex-[2]">
        <h1>Give up on an idea</h1>
        <p>
          Accepted that the domain you own for that project you started
          won&rsquo;t ever get finished? Or maybe you just want stop thinking
          about your not so clever idea?
        </p>
        <form onSubmit={handleCreateIdea}>
          <label htmlFor="url">
            Real or imagined URL
            <input {...register("url")} className="dark:text-blue-500" />
          </label>
          <Button type="submit">Submit</Button>
        </form>
      </section>
    </div>
  );
}
