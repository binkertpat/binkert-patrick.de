import SHOCKED_PIKACHU from "../img/shocked_pickachu_face.gif";

const NotFound = () => {
  return (
    <>
      <h1 className="display-5 fw-bold lh-1 mb-4 text-center">OMG! 🫣</h1>
      <img src={ SHOCKED_PIKACHU } className="img-fluid mx-auto d-block mb-4" alt="..."/>
      <h2 className="display-6 fw-bold lh-1 mb-4 text-center">... ein 404 ERROR ...</h2>
    </>
  );
};

export default NotFound;
