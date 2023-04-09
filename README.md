#wetube Reload

/_ global Router _/
/ → Home
/join → join
/login → login
/search → search

/_ user Router _/
/users/:id → see user
/users/logout → logout

//\*로그인을 해야만 접근가능

/users/edit → edit my profile
/users/remove → remove my profile

/_ videos Router _/
/videos/:id → see video
/videos/:id/edit → edit video
/videos/:id/remove → remove video
/videos/upload → upload video

/videos/comment → comment on a video
/videos/comment/delete → delete comment on a video
