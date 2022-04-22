# Web Application

## This is a web a application developed using JavaScript and meant to serve as a directory of patients under the care of a doctor

## Product Requirements

Goal: Allow doctor to successfully maintain a database of patients

## Functional Requirements and User Stories

|  | User Story | Requirement |Priority|
|---|---|---|---|
|Login on Device|As an existing user I want to be able to login to my account|The system must allow users to login using their email and password|Must Have|
|Update profile|As an existing user I want to be able to update my profile|The system must allow users to update their profile|Must Have|
|Add, update and delete patients|I should be able to add new patients to the system|The system must be able to add new patients, update their information or delete patients|Must Have|
|Display patient details|My existing patients should be visible to me|The system must display any patients added to the database|Must Have|
|Choose an MRI scan|As the doctor I should be able to choose a patient's MRI scan from the device|The system must be able to choose an MRI scan from the uesr's device|Must Have|
|Display MRI scan classification|As the doctor I should be able to view the classification of Alzheimer's and the upload button after choosing the image|The system must display the classification of MRI scan along with the **Upload** button after the doctor chooses the image|Must Have|
|Upload MRI scan|As the doctor I should be able to upload a patient's MRI scan|The system must be able to upload an MRI scan by pressing the **Upload** button|Must Have|


---

## The dashboard

The dashboard is the first page that opens up after the doctor completes the log in process

![alt text](https://github.com/KalpakGaonkar/patient-management-system/blob/main/Screenshots/Screen%20Shot%202022-04-22%20at%209.59.53%20AM.png)

## List of Patients

This page is visible after the doctor clicks on **My Patients** button from the navigation bar

There are two sections to this page:

- The first section is on the left side is the form for adding new patients to the list
- The second section is on the right side which displays the list of patients

![alt text](https://github.com/KalpakGaonkar/patient-management-system/blob/main/Screenshots/Screen%20Shot%202022-04-22%20at%2010.00.19%20AM.png)

## Patient Details

This page is visible after the doctor clicks on the patient's name on the **List of Patients** page

![alt text](https://github.com/KalpakGaonkar/patient-management-system/blob/main/Screenshots/Screen%20Shot%202022-04-22%20at%2010.00.37%20AM.png)

## Upload MRI scan

Clicking the upload button on a patient from the list on the **List of Patients** page prompts the doctor to upload an MRI scan image

The image is then passed to the machine learning model which displays the output of the MRI scan below the upload button (shown in the screenshot below)

After the output of the MRI scan is displayed, the doctor can click the Upload Button to upload the image and its classification to the database (Upload button not displayed until the classification of the MRI image is done by the machine learning model to prevent any errors)

![alt text](https://github.com/KalpakGaonkar/AlzCareWebApp/blob/main/Screenshots/Screen%20Shot%202022-04-22%20at%2010.00.49%20AM.png)


