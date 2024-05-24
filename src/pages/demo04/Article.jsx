import {useParams} from "react-router-dom";

const Article = () => {
  const params = useParams();

  const id = params.id
  const name = params.name
  return (
    <div>
        this is article
        <p>id: {id}</p>
        <p>name: {name}</p>
    </div>
  );
};

export default Article;
