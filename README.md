To add Movie:
--create --title --actor --director --date
title and date required, if nothing entered for actor/director comes back 'Not Specified'

To search:
--read then search by either:
--title - returns anything with matching title (titles are unqiue so only one)
--actor - returns all movies with actor in
--director - returns all movies with director in
--date - returns all movies with date in

To update (can't update title):
--update --title (finds title to update) --newActor --newDirector --newDate
can be used individually
so --update --title --newDirector - would just update director

To delete:
-- delete --title - selected by title only.

same for tv but with Tv at end i.e. --createTv --title --actor --director --date.