import { useEffect } from "react";
import { Link } from "react-router-dom";
import Faq from "react-faq-component";
import useDarkMode from "../hooks/useDarkMode";
import Header from "../ui/Header";
import Loader from "../ui/Loader";

const data = {
  title: "Frequently Asked Questions",
  rows: [
    {
      title: "What is TurBoGrader?",
      content:
        "TurBoGrader is a tool that automatically grades coding assignments. It's designed to make grading faster and more accurate, helping both teachers and students in schools and colleges.",
    },
    {
      title: "Who can benefit from using TurBoGrader?",
      content:
        "Students, teachers, and schools can all benefit from using TurBoGrader. Students get quick feedback on their work, teachers save time on grading, and schools see more consistent and fair grades.",
    },
    {
      title: "How does TurBoGrader improve the grading process?",
      content:
        "TurBoGrader makes grading automatic, which means it's quicker and less likely to make mistakes than humans. It can handle many assignments at the same time and gives detailed feedback to help students learn.",
    },
    {
      title: "How secure is the data entered into TurBoGrader?",
      content:
        "We take security seriously in TurBoGrader. We use strong security measures to keep all the assignments and grades safe and private.",
    },
    {
      title: "Can students view their past submissions and grades?",
      content:
        "Yes, students can look at their previous work and grades anytime on TurBoGrader. This helps them see how they are doing over time and find areas to improve.",
    },
    {
      title: "Can users suggest features for future updates?",
      content: (
        <span className="bg-grey-0 dark:bg-grey-0-dark">
          Yes, we love hearing from our users! If you have ideas for new
          features, you can tell us through our
          <Link to="/connect" style={{ color: "#DB2229" }}>
            {" "}
            Connect page{" "}
          </Link>
          or contact us directly with the information provided there.
        </span>
      ),
    },
    {
      title: "How can I get technical support for TurBoGrader?",
      content: (
        <span className="bg-grey-0 dark:bg-grey-0-dark">
          If you need help with TurBoGrader, please send us a message through
          our
          <Link to="/connect" style={{ color: "#DB2229" }}>
            {" "}
            Connect page{" "}
          </Link>
          or use the contact details there to get in touch. We’re here to help
          you.
        </span>
      ),
    },
  ],
};

const config = {
  animate: true,
  arrowIcon: "V",
  openOnload: 0,
  expandIcon: "+",
  collapseIcon: "-",
};

export default function FAQPage() {
  const { isDarkMode, isDarkModeLoading } = useDarkMode();
  if (isDarkModeLoading) return <Loader />;
  return (
    <div className="h-full w-full bg-grey-0 dark:bg-grey-0-dark">
      {<Header />}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "70px",
        }}
        className="bg-grey-0 dark:bg-grey-0-dark"
      >
        <Faq
          data={data}
          styles={{
            bgColor: "transparent",
            titleTextColor: `${isDarkMode ? "#f2164d" : "#DB2229"}`,
            titleTextSize: "48px",
            rowTitleColor: `${isDarkMode ? "#4269dd" : "##233364"}`,
            rowTitleTextSize: "medium",
            rowContentColor: `${isDarkMode ? "white" : "grey"}`,
            rowContentTextSize: "16px",
            rowContentPaddingTop: "10px",
            rowContentPaddingBottom: "10px",
            rowContentPaddingLeft: "50px",
            rowContentPaddingRight: "150px",
            arrowColor: `${isDarkMode ? "#f2164d" : "#DB2229"}`,
            transitionDuration: "1s",
            timingFunc: "ease",
            rowStyle: {
              border: "2px solid lightgray",
              borderRadius: "50px",
              margin: "5px 0",
              padding: "10px",
              backgroundColor: "transparent",
            },
          }}
          config={config}
        />
      </div>
    </div>
  );
}

/* 
<div style={{
          backgroundImage: `url(${FAQBG})`,
          backgroundColor: 'white', // Ensures this part is white
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          minHeight: '300px',
        }}>
        </div>
*/
