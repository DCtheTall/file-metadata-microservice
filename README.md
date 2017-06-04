# File Metadata Microservice
This is a REST API microservice which will tell you the size of your file (bytes).
## To build
Run `npm install` in the root
Run webpack in the root
## Submitting a file:
#### Example request:
`POST https://dcthetall-file-metadata.herokuapp.com/api/file/size`
with the following request body
`{ "fileUrl": [file_as_base64_URL_string] }`
#### Example response:
`{ "filename": "data/[epoch_time].[file_extension]" }`
## Getting the file's size:
#### Example request:
Using the file name from the POST request response
`GET https://dcthetall-file-metadata.herokuapp.com/api/file/size?name=[file_name]`
#### Example response:
`{ "size": [file_size_in_bytes] }`
