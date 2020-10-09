<<<<<<< HEAD
export default (timestamp) => {
  let hours = Math.round((timestamp - Date.now()) / (60 * 60 * 1000));

  let data = { timeLeft: `${hours}h left` };

  if (hours >= 3) data.color = "green";
  else if (hours >= 2) data.color = "yellow";
  else if (hours >= 1) data.color = "orange";
  else {
    data.timeLeft = "<30m left";
    data.color = "red";
  }

  return data;
};
=======
export default (timestamp) => {
  let hours = Math.round((timestamp - Date.now()) / (60 * 60 * 1000));

  let data = { timeLeft: `${hours}h left` };

  if (hours >= 3) data.color = "green";
  else if (hours >= 2) data.color = "yellow";
  else if (hours >= 1) data.color = "orange";
  else {
    data.timeLeft = "<30m left";
    data.color = "red";
  }

  return data;
};
>>>>>>> csb-e4kuf
