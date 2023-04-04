import { Task } from "./tasks";
import { appBoard } from "../index.js";

import {
  format,
  differenceInDays,
  startOfDay,
  endOfDay,
  startOfWeek,
  addDays,
} from "date-fns";

export const ProjectsNotToRemove = [
  "Today/Tomorrow",
  "Next 7 Days",
  "Next 30 Days",
  "Important",
  "Expired",
  "All Tasks",
  "General Tasks",
];

export function Project(project_name) {
  let projectName = project_name;
  let isProjectChecked = false;

  let tasksList = [];

  function addTask(task) {
    this.tasksList.push(task);
  }

  return {
    projectName,
    tasksList,
    isProjectChecked,
    addTask,
  };
}

export function createTestProjects() {
  if (appBoard.projectsList.length !== 0) {
    return;
  }

  function getFutureEventDate(days_later) {
    const startOfCurrentWeek = startOfWeek(new Date(), { weekStartsOn: 1 }); // Assuming Monday is the first day of the week

    const futureDate = format(
      addDays(startOfCurrentWeek, days_later),
      "yyyy-MM-dd"
    );

    return futureDate;
  }

  function isDatePast(date) {
    //date in "yyyy-MM-dd" format as input

    let daysBetween = differenceInDays(new Date(date), new Date());
    return daysBetween < 0 ? true : false;
  }

  //adding default projects
  ProjectsNotToRemove.forEach((title) => {
    appBoard.addProject(Project(title));
  });

  //adding test projects
  appBoard.addProject(Project("Work"));
  appBoard.addProject(Project("Gym"));
  appBoard.addProject(Project("Birthdays"));
  appBoard.addProject(Project("Coding Projects"));

  let testTask_1 = Task("call your parents", ProjectsNotToRemove[6]);
  testTask_1.description = "wie geht's?";
  testTask_1.dueDate = format(new Date(), "yyyy-MM-dd");
  testTask_1.uniqueID = 10;
  appBoard.projectsList[6].addTask(testTask_1);

  let testTask_2 = Task("car maintenance", ProjectsNotToRemove[6]);
  testTask_2.description = "weird noise from the gear..";
  testTask_2.dueDate = getFutureEventDate(19);
  testTask_2.isImportant = true;
  testTask_2.uniqueID = 20;
  appBoard.projectsList[6].addTask(testTask_2);

  let testTask_3 = Task("Organise emergency procedures", "Work");
  testTask_3.description = "Airplane emergency procedures";
  testTask_3.dueDate = getFutureEventDate(3);
  testTask_3.isTaskChecked = isDatePast(testTask_3.dueDate) ? true : false;
  testTask_3.uniqueID = 30;
  appBoard.projectsList[7].addTask(testTask_3);

  let testTask_4 = Task("Meeting with the CTO", "Work");
  testTask_4.description = "Medical device costs are increasing";
  testTask_4.dueDate = getFutureEventDate(4);
  testTask_4.isTaskChecked = isDatePast(testTask_4.dueDate) ? true : false;
  testTask_4.isImportant = true;
  testTask_4.uniqueID = 40;
  appBoard.projectsList[7].addTask(testTask_4);

  let testTask_5 = Task("Team Meeting", "Work");
  testTask_5.description = "weekly team meeting";
  testTask_5.dueDate = getFutureEventDate(4);
  testTask_5.isTaskChecked = isDatePast(testTask_5.dueDate) ? true : false;
  testTask_5.uniqueID = 50;
  appBoard.projectsList[7].addTask(testTask_5);

  let testTask_6 = Task("Chest Day", "Gym");
  testTask_6.description = "International Chest day";
  testTask_6.dueDate = getFutureEventDate(0);
  testTask_6.isTaskChecked = isDatePast(testTask_6.dueDate) ? true : false;
  testTask_6.uniqueID = 60;
  appBoard.projectsList[8].addTask(testTask_6);

  let testTask_7 = Task("Arm Day", "Gym");
  testTask_7.description = "working on those guns";
  testTask_7.dueDate = getFutureEventDate(2);
  testTask_7.isTaskChecked = isDatePast(testTask_7.dueDate) ? true : false;
  testTask_7.isImportant = true;
  testTask_7.uniqueID = 70;
  appBoard.projectsList[8].addTask(testTask_7);

  let testTask_8 = Task("Chest and Arm Day", "Gym");
  testTask_8.description = "brooo";
  testTask_8.dueDate = getFutureEventDate(4);
  testTask_8.isTaskChecked = isDatePast(testTask_8.dueDate) ? true : false;
  testTask_8.uniqueID = 80;
  appBoard.projectsList[8].addTask(testTask_8);

  let testTask_9 = Task("Brother birthday", "Birthdays");
  testTask_9.description = "brooo";
  testTask_9.dueDate = "2024-01-26";
  testTask_9.uniqueID = 90;
  appBoard.projectsList[9].addTask(testTask_9);

  let testTask_10 = Task("Mom birthday", "Birthdays");
  testTask_10.description = "yeeey";
  testTask_10.dueDate = "2024-03-18";
  testTask_10.uniqueID = 100;
  appBoard.projectsList[9].addTask(testTask_10);

  let testTask_11 = Task("Dad birthday", "Birthdays");
  testTask_11.description = "yuaaay";
  testTask_11.dueDate = "2024-02-13";
  testTask_11.uniqueID = 110;
  appBoard.projectsList[9].addTask(testTask_11);

  let testTask_12 = Task("Weather App", "Coding Projects");
  testTask_12.description = "working with APIs";
  testTask_12.dueDate = getFutureEventDate(27);
  testTask_12.uniqueID = 120;
  appBoard.projectsList[10].addTask(testTask_12);

  let testTask_13 = Task("To Do App", "Coding Projects");
  testTask_13.description = "https://berkgirgin.github.io/To_Do_App/";
  testTask_13.dueDate = "2023-03-26";
  testTask_13.isImportant = true;
  testTask_13.isTaskChecked = true;
  testTask_13.uniqueID = 130;
  appBoard.projectsList[10].addTask(testTask_13);

  let testTask_14 = Task("Connect Four Game", "Coding Projects");
  testTask_14.description = "https://berkgirgin.github.io/Connect-Four/";
  testTask_14.dueDate = "2023-03-12";
  testTask_14.isTaskChecked = true;
  testTask_14.uniqueID = 140;
  appBoard.projectsList[10].addTask(testTask_14);
}
