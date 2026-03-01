# JSL03 project brief: Console-Based Task Manager

## Important Prerequisite

1. Before starting this challenge, i made sure that i have reviewed and corrected my JSL02 project using the provided solution. my prompts for entering task details should be fully functional and include proper validation checks to ensure accurate user input.
2. **Check the project user stories in your student dashboard**, make sure i understand what is required for each feature.
3. **Review the provided solution for JSL02** to ensure that my task management system is built on a solid foundation, with all prompts and validations working correctly before proceeding to the new features in this project.
4. **Familiarize myself with array manipulation techniques** in JavaScript, as this project will require me to manage tasks stored as objects within an array, including adding new tasks and filtering existing ones based on their status.

## Overview

This project involves creating a **simple task management system** where users can add **up to three new tasks** to an existing task array. Tasks are **stored as objects in an array**, each with a **unique incremental ID**. Users will enter task details via prompts, and the system will allow filtering to view only completed tasks. The project focuses on **array manipulation, user interaction via prompts and alerts, and console logging for task management**.

## Key Objectives

### Logic & User Interaction

- Store tasks as **objects inside an array** for structured data management.
- Allow users to **add up to three new tasks** to the existing task list.
- Ensure each new task has a **unique incremental ID** based on the last task in the array.
- Prompt users to enter **task details (title, description, status)** and store them in an object.
- Alert users when they reach the task limit with the message:
  _"There are enough tasks on your board, please check them in the console."_
  Implement a **filter function** to display only tasks with the status `"done"`.
- Log **all tasks** in the console with a clear label for easy review.
- Log **only completed tasks** (status: `"done"`) in the console under a "Completed Tasks" label for quick reference.
-

### Code Quality & Maintainability

- Use meaningful variable and function names to ensure readability and maintainability.
- Follow consistent indentation and formatting to enhance code clarity.
- Include comments explaining key logic and functionality to support future modifications.

## Expected Outcome

A **structured and limited task management system** that enables users to add, review, and filter tasks efficiently while ensuring **clean, well-documented, and maintainable code.**

**Console Log of all and completed tasks**
![console log](./explainer-images/console%20log.png)
