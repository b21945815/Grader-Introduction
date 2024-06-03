import ConnectBG from "../assets/ConnectBG.png";
import Header from "../ui/Header";

const ConnectPage = () => {
  return (
    <div
      className="dark:bg-grey-0-dark"
      style={{
        backgroundImage: `url(${ConnectBG})`, // Using the imported image as the background
        backgroundSize: "cover", // Ensures the background covers the full view
        backgroundRepeat: "no-repeat", // Makes sure the image does not repeat
        backgroundPosition: "center", // Centers the background image
      }}
    >
      {<Header />}
      <div
        style={{
          display: "flex", // Enables flexbox
          justifyContent: "center", // Centers children horizontally
          alignItems: "start", // Aligns children at the top of their container
          height: "100vh", // Makes the container full height
          padding: "20px", // Provides some spacing around
        }}
      ></div>
    </div>
  );
};

export default ConnectPage;
