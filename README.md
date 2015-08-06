


* __[conv.html](conv.html)__ - Example for all Core apps (Comments, Chat, Blog)
* __[reviews.html](reviews.html)__ - Example for reviews app
* __[sidenotes.html](sidenotes.html)__ - Example for Sidenotes
* __[wall.html](wall.html)__ - Example for media wall / feed apps (anything using ContentListView)


### Related Links

* __[Livefyre JS Events](http://answers.livefyre.com/developers/reference/javascript-events/)__
* __[Sidenotes Events](http://answers.livefyre.com/developers/app-integrations/sidenotes/#AppEvents)__


## Core Apps

Request | Status | trackingDelegate Function | Type | Meaning
------- | ------ | ------------------------- | ---- | -------
Number of users who logged in | :white_check_mark: | trackingDelegate.Core.userLoggedIn | Official | User logged into the app
Number of comments | :white_check_mark: | trackingDelegate.Core.commentPosted | Official | User posted a comment
Number of livechat question submissions | :white_check_mark: | trackingDelegate.Core.commentPosted | Official | User posted a comment
Number of likes | :white_check_mark: | trackingDelegate.Core.commentLiked | Official | User posted a comment
Number of replies | :white_check_mark: | trackingDelegate.Core.commentPosted | Official | User posted a comment
Number of shares | :white_check_mark: | trackingDelegate.Core.commentShared | Official | User shared post using share button, OR while posting comment
Number of flags | :white_check_mark: | trackingDelegate.Core.commentFlagged | Official | User flagged a comment in an app
Clicks on blog post items | :white_check_mark: | trackingDelegate.Core.attachmentClicked | Unofficial | User clicked a media item
User logged out | :white_check_mark: | trackingDelegate.Core.userLoggedOut | Official | User logged out of the app
N/A | N/A | trackingDelegate.Core.showMore | Official | User clicked Show More button

## Reviews

Request | Status | trackingDelegate Function | Type | Meaning
------- | ------ | ------------------------- | ---- | -------
Percent tagged helpful | :white_check_mark: | trackingDelegate.Reviews.upVote | Unofficial | User clicked Helpful - Yes button
Percent tagged not helpful | :white_check_mark: | trackingDelegate.Reviews.downVote | Unofficial | User clicked Helpful - No button


## Sidenotes

Request | Status | trackingDelegate Function | Type | Meaning
------- | ------ | ------------------------- | ---- | -------
User logged in | :white_check_mark: | trackingDelegate.Sidenotes.userLoggedIn | Official | User logged into Sidenotes app
User logged out | :white_check_mark: | trackingDelegate.Sidenotes.userLoggedOut | Official | User logged out of Sidenotes app
Number of comments | :white_check_mark: | trackingDelegate.Sidenotes.commentPosted | Official | User posted a comment into a Sidenotes app
Number of likes | :white_check_mark: | trackingDelegate.Sidenotes.commentVoted | Official | User up/down voted a comment in a Sidenotes app
Number of shares | :white_check_mark: | trackingDelegate.Sidenotes.commentVoted | Official | User shared from a Sidenotes app
Number of flags | :white_check_mark: | trackingDelegate.Sidenotes.commentFlagged | Official | User flagged a comment in a Sidenotes app

## Media Wall

Request | Status | trackingDelegate Function | Type | Meaning
------- | ------ | ------------------------- | ---- | -------
Click on item | :white_check_mark: | trackingDelegate.MediaWall.contentClicked | Unofficial | User clicked on an item in the wall
Load more clicked | :white_check_mark: | trackingDelegate.MediaWall.loadMoreClicked | Unofficial | User clicked the load more button
Twitter reply | :white_check_mark: | trackingDelegate.MediaWall.twitterReply | Unofficial | User clicked reply to a Tweet on the wall
Twitter retweet | :white_check_mark: | trackingDelegate.MediaWall.twitterRetweet | Unofficial | User clicked retweet on a Tweet on the wall
Twitter favorite | :white_check_mark: | trackingDelegate.MediaWall.twitterFavorite | Unofficial | User clicked favorite on a Tweet on the wall
Share item | :white_check_mark: | trackingDelegate.MediaWall.contentShare | Unofficial | User clicked share on a non-Twitter item on the wall
Like Item | :white_check_mark: | trackingDelegate.MediaWall.contentLike | Unofficial | User clicked share on a non-Twitter item on the wall
Media wall log-in | :x: | n/a | Unofficial | User logged in via the wall

## Maps

Request | Status | trackingDelegate Function | Type | Meaning
------- | ------ | ------------------------- | ---- | -------
Click on item | :x: | n/a | Unofficial | User logged in via the map
Twitter reply | :x: | n/a | Unofficial | User clicked reply to a Tweet on the map
Twitter retweet | :x: | n/a | Unofficial | User clicked retweet on a Tweet on the map
Twitter favorite | :x: | n/a | Unofficial | User clicked favorite on a Tweet on the map
Share item | :x: | n/a | Unofficial | User clicked share on a non-Twitter item on the map

## Trending

Request | Status | trackingDelegate Function | Type | Meaning
------- | ------ | ------------------------- | ---- | -------
Click on item | :x: | n/a | Unofficial | User clicked an item in the trending app
