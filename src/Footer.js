import { HeartFill } from "react-bootstrap-icons";
export const Footer = () => {
  return (
    <footer className="border-top footer bg-primary">
      <div className="text-center custom-text-muted">
        {" "}
        {}
        Made with{" "}
        <i>
          <HeartFill />
        </i>{" "}
        by Taras
      </div>
    </footer>
  );
};
