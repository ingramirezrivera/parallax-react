import ImageOne  from "./components/imgageOne";
import ImageTwo from "./components/imageTwo";
import ImageThree from "./components/imageThree";
import ImageFour from "./components/imageFour";
import TextBox from "./components/textBox";

function App() {
  return (
    <div>
      <h1 className="brand">Parallax Space</h1>
      <ImageOne />
      <TextBox />
      <ImageTwo />
      <TextBox />
      <ImageThree />
      <TextBox />
      <ImageFour />
    </div>
  );
}

export default App;
