import { ConfigProvider, Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import HeaderBG from "../assets/HeaderBG.png";
import HeaderDarkBG from "../assets/HeaderDarkBG.png";
import Loader from "../ui/Loader";
import useDarkMode from "../hooks/useDarkMode";
import HeaderMenu from "./HeaderMenu";
const { Header: AntHeader } = Layout;

export default function Header() {
  const location = useLocation();
  const { isDarkMode, isDarkModeLoading } = useDarkMode();

  const lightTheme = {
    components: {
      Menu: {
        itemHoverColor: "#DB2229",
        horizontalItemHoverColor: "#DB2229",
        horizontalItemSelectedColor: "#DB2229",
      },
    },
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/turbo_grader_poster.pdf";
    link.download = "turbo_grader_poster.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getMenuKeyFromPath = (path) => {
    switch (path) {
      case "/whatis":
        return "1";
      case "/faq":
        return "2";
      case "/connect":
        return "3";
      default:
        return "-1";
    }
  };

  const selectedKey = [getMenuKeyFromPath(location.pathname)];

  if (isDarkModeLoading) return <Loader />;

  return (
    <ConfigProvider theme={lightTheme}>
      <Layout
        className="layout"
        style={{
          minHeight: "150px",
          alignItems: "top",
          width: "100%",
        }}
      >
        <AntHeader
          style={{
            backgroundImage: `${isDarkMode ? `url(${HeaderDarkBG})` : `url(${HeaderBG})`}`,
            backgroundColor: `${isDarkMode ? "#18212f" : "#ffffffff"}`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: "0 24px",
            minHeight: "180px",
          }}
        >
          <Menu
            mode="horizontal"
            defaultSelectedKeys={selectedKey}
            style={{
              backgroundColor: `${isDarkMode ? "#18212f" : "#ffffffff"}`,
              width: "40%",
            }}
          >
            <Menu.Item key="1">
              <Link to="/whatis">
                <div className="text-grey-800 dark:text-grey-700-dark">
                  What is TurBograder?
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/faq">
                <div className="text-grey-800 dark:text-grey-700-dark">
                  FAQs
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/connect">
                <div className="text-grey-800 dark:text-grey-700-dark">
                  Connect
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <button onClick={handleDownload}>
                <div className="text-grey-800 dark:text-grey-700-dark">
                  Download Poster
                </div>
              </button>
            </Menu.Item>
            <Menu.Item key="5">
              <a
                href="https://test-grader.cs.hacettepe.edu.tr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-grey-800 dark:text-grey-700-dark">
                  TurBo Grader(End of First Term Version)
                </div>
              </a>
            </Menu.Item>
          </Menu>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              paddingTop: "10px",
            }}
          >
            <HeaderMenu />
          </div>
        </AntHeader>
      </Layout>
    </ConfigProvider>
  );
}
