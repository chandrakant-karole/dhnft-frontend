import Countdown from "react-countdown";
import moment from "moment";
import MintButton from "./MintButton";

function renderer({ days, hours, minutes, seconds, completed }) {
  if (completed) {
    return <Timer completed={completed} />;
  } else {
    return (
      <Timer days={days} hours={hours} minutes={minutes} seconds={seconds} />
    );
  }
}

function Footer() {
  let utcTime = "2021-10-02 22:00:00.000";
  const launchDate = moment.utc(utcTime).local().valueOf();

  return (
    <footer>
      <Countdown date={launchDate} renderer={renderer} />
    </footer>
  );
}

function n(n) {
  return n > 9 ? "" + n : "0" + n;
}

function Timer({
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
  completed = false,
}) {
  return (
    <div className="container">
      <h2 className="heading">We are sold out !!! 🎉</h2>
    </div>
  );
}

export default Footer;
