# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Design#1
- Title: Make possible for facilities create and save custom Ids for Agent
- Description: Add editable field with the custom Agent's Id for Facilities plus Error handling on save
- Estimate 3

Web#1
- Title: Make possible for facilities create and save custom Ids for Agent
- Description: We need to provide Facilities with ability to create and store Agent's custom Id. Add field according to the design
- Acceptance criteria: User can edit and save Agent's custom id. On save error must be handled with the alerts
- Estimate: 3

Backend#1
- Title: Make possible for facilities create and save custom Ids for Agent
- Description: We need to provide Facilities with ability to create and store Agent's custom Id. Update/Delete might be added further
- Acceptance criteria: Agent's custom Id can be provided from the client and stored in the Agent's database.
- Estimate 5

Backend#2
- Title: Agent's metadata must be updated with the custom Id
- Description: Custom_id must be added to the Agent's metadata received within the Shift
- Acceptance criteria: Agent's metadata must be updated with the custom Id
- BlockedBy: Backend#1
- Estimate 3

Backend#3
- Title: Generate report with the new Agents custom Id
- Description: We need to generate Reports with the Agent's custom Id keeped in the Shift metadata
- BlockedBy: Backend#2
- Acceptance criteria: Reports are generating with the Agent's custom id
- Estimate 2