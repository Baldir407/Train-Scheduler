# Train-Scheduler

Created a train scheduler application that logs in a train name, destination, frequency and arrival time.
The app then sends the information to firebase where it is logged.
Firebase then sends back the information and moment.js calculates the time left until the next train arrives. (Had issues with moment.js where it wouldn't work out just the way I wanted. tried multiple solutions but none seemed to really fit.)