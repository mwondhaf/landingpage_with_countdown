import {
  CircularProgress,
  CircularProgressLabel,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import moment from "moment";
import React, { useEffect, useState } from "react";

function CountDown() {
  const [launchTime, setLaunchTime] = useState();
  const [secondsToLaunch, setSecondsToLaunch] = useState();
  const [minutesToLaunch, setMinutesToLaunch] = useState();
  const [hoursToLaunch, setHoursToLaunch] = useState();
  const [daysToLaunch, setDaysToLaunch] = useState();
  const [monthsToLaunch, setMonthsToLaunch] = useState();

  let countDownDate = moment("2022-10-12").add(3, "months");

  useEffect(() => {
    var x = setInterval(() => {
      var now = moment();
      var distance = countDownDate.diff(now);
      var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setMonthsToLaunch(months);
      setDaysToLaunch(days);
      setHoursToLaunch(hours);
      setMinutesToLaunch(minutes);
      setSecondsToLaunch(seconds);
      setLaunchTime(`${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
    return () => clearInterval(x);
  }, []);
  // get percentage of remaining seconds in a minute and convert to percentage
  var secondsPercent = (secondsToLaunch / 60) * 100;

  // get percentage of remaining minutes in a hour and convert to percentage
  var minutesPercent = (minutesToLaunch / 60) * 100;
  // get percentage of remaining hours in a day and convert to percentage
  var hoursPercent = (hoursToLaunch / 24) * 100;

  // get difference between today and launchTime and convert to percentage
  var daysPercent = (countDownDate.diff(moment(), "days") / 90) * 100;

  return (
    <HStack justify="center">
      <CircularProgress
        capIsRound
        value={daysPercent}
        trackColor="rgba(255, 153, 0, 0.3)"
        size={["80px", "120px"]}
        color="#B89871"
      >
        <CircularProgressLabel>
          <Heading color="whiteAlpha.700" size="lg">
            {daysToLaunch}
          </Heading>
          <Text fontSize={["8px", "12px"]} color="#ADADAD">
            DAYS
          </Text>
        </CircularProgressLabel>
      </CircularProgress>
      <CircularProgress
        capIsRound
        value={hoursPercent}
        trackColor="rgba(255, 153, 0, 0.1)"
        size={["80px", "120px"]}
        color="#B89871"
      >
        <CircularProgressLabel>
          <Heading color="whiteAlpha.700" size="lg">
            {hoursToLaunch}
          </Heading>
          <Text fontSize={["8px", "12px"]} color="#ADADAD">
            HOURS
          </Text>
        </CircularProgressLabel>
      </CircularProgress>
      <CircularProgress
        capIsRound
        value={minutesPercent}
        trackColor="rgba(255, 153, 0, 0.1)"
        size={["80px", "120px"]}
        color="#B89871"
      >
        <CircularProgressLabel>
          <Heading color="whiteAlpha.700" size="lg">
            {minutesToLaunch}
          </Heading>
          <Text fontSize={["8px", "12px"]} color="#ADADAD">
            MINUTES
          </Text>
        </CircularProgressLabel>
      </CircularProgress>
      <CircularProgress
        capIsRound
        value={secondsPercent}
        trackColor="rgba(255, 153, 0, 0.1)"
        size={["80px", "120px"]}
        color="#B89871"
      >
        <CircularProgressLabel>
          <Heading color="whiteAlpha.700" size="lg">
            {secondsToLaunch}
          </Heading>
          <Text fontSize={["8px", "12px"]} color="#ADADAD">
            SECONDS
          </Text>
        </CircularProgressLabel>
      </CircularProgress>
    </HStack>
  );
}

export default CountDown;
