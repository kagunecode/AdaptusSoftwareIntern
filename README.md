# Technical project for Adaptus LLC Software Engineer Intern

## JavaScript project

For this project you will complete a Javascript function that we like to call ‘module’. This module
will need to process arrays that will contain ids inside of them. The main purpose is to process all
of them and figure out depending on the following instructions which ones should be kept. At the
end, the module should return a single list of ids or an error object in case it errors out.
You will be provided a Github repository where you will find a template file which you will need
to edit. At the end, you will deliver this template edited using Git in any way you think you should,
it is your choice to decide how you want to give it to us. If you wish to get contributor access to
the repository, we will grant it to you on request.
This project should be developed on your own and any indication of the contrary will reject your
application for this position. We encourage candidates to ask questions and we will try to respond to them promptly, which
will help us understand how you approach a problem. We recommend you against using AI tools to solve this project.

The logic that the module should meet should be this one:

- Receive 3 arrays:
  - Files: Array that has a list of file IDs. Represents all the file ids that we want to scan. Should
    never be empty
  - scanned_files: Array that has a list of file IDs. Represents all the file ids that have been
    scanned. Can be empty
  - errored_files: Array that has a list of file IDs. Represents all the file ids that we tried to
    scan but were not successfull. Can be empty
- Validate input for those arrays are in the right format
- Process the array so that at the end the task should return an array with the file IDs that we have
  NOT scanned yet.
- Finally, imagine there is a module you can call called s3_driver that has a function to upload this
  result to AWS S3 by calling the function add() inside that module. The only input it needs is a path
  (you can put whatever path you want) and the array from the previous step.
  - Call the add function to put the array in S3.
  - It returns a promise so handle it accordingly
  - At the end, the module will return 1 of 2 things
- If there is an error at any moment it should return an object with a status property with
  an –error- value and a message property showing what the error was.
- If it was successful it should return the array from step 3.

To do this, we will provide you with a template and you should follow it to complete these conditions so
that it matches our code style. The template will look like the following image and below it we will explain
how to use it.

- shared constant: It is used to create any kind of constant that should be used for labels in the
  code that should not be put as strings. If you want to use it in your code, you should call it like
  this:
  ```js
  shared.CONSTANT_NAME;
  ```
- resources constant: It is used to represent the other modules that will be called from this specific
  task. If you want to use a specific module in your code, the declaration should be something like:
  ```js
  const { module_name, \_debug } = resources
  ```
- Load function: The purpose of this function is to ONLY load parameters that come in for this
  specific module, such as the arrays and it should not contain any logic. They would be declared
  like
  ```js
  config.param_1 = input.param_1;
  ```
- Validate function: The purpose of this function is to ONLY validate any parameters that might not
  be valid for the current module to work and throw an error in case they do not match the right
  values.
- Setup function: The purpose of these functions is to add any logic to incoming parameters to
  make them available in the right format for the module itself. This would only be used if format
  or values need to be added to the incoming parameter
- Module logic. All the logic of the specific module should be added after line 15 where the data is
  loaded. The data variable will contain everything that has been loaded in the load function and
  processed by the setup itself. Here is where the logic should sit and where the main code should
  sit to make the module work
- Output variable: The output variable is what the module itself will return, it can be an error object
  or the result of the processing in case everything worked fine.
