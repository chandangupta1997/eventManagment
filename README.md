# eventManagment


User
01. Register (User can register)
02. Login (User login)
03. Logout (User logout)
04.Change Password (User can change his password)
05. Update Password (When request for reset password is done, to set new
password)
06.Reset/Forgot Password (In API response send info regarding to update
password)
Event (Authentication required for doing operations on event)
01. Create (User can create Event)
02. Invite (Users) // when that user login in he can see his created event list and
also events in which he is invited.
03. List (Invited users when login can see their created events as well as events in
which they are invited in, also display creator name in list)
04.Following are the actions that need to be done on listing api
a. pagination
b. Sorting
c. Date Filter
d. Search Filter
05. Event Detail + list of users invited (API to get specific event and invites)
06.Event update (Event Update)


○ User
■ Title
● Metadata, - { required, enum [Mr, Miss, Mrs]}
■ name/fullname
■ Email
● Metadata - { required, unique, valid email syntax}
■ Password
● Metadata - { required, use bcrypt }
■ createdAt
■ modifiedAt
■ resetPasswordToken
○ Event


■ name -> title
■ description
■ eventDate
■ createdBy -> userId
■ invitees [{invitee, invitedAt}]
● Data type - array of objects
● Object structure would be { invitee: ObjectId(userId),
invitedAt: timestamp }
■ createdAt
■ modifiedAt
○ Reset password requests 
■ userid
■ Email
■ Token
■ createdAt
■ modifiedAt



● API Strategy
○ User
■ User registration
■ User login
■ User logout (destroy JWT token)
■ Change password - authenticated user
■ Reset password (token)
■ Update password (set new password for the user)
○ Event (Protected)
■ Create event
■ Invite to event
■ List events (pagination, filter - date, search, sorting)
■ Update event (only the creator could update it)
■ Event detail
