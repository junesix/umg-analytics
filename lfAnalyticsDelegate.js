/* 
 *  trackingDelegate
 *  Author: Paul Colombo - pcolombo@livefyre.com
 *  Proof of concept demonstrating a centralized method for tracking
 *  both supported and overriden Livefyre app events.
 *  Note: This code is intended as a reference for your implementation. 
 *  You are free to modify or re-package as needed.
 *  This is not supported Livefyre code.
*/

var trackingDelegate = window.trackingDelegate || {};

trackingDelegate.CATEGORY = "comments - Livefyre";
trackingDelegate.ACTION_COMMENT = "add comment";
trackingDelegate.ACTION_SHARE = "share comment";
trackingDelegate.ACTION_LIKE = "like comment";
trackingDelegate.ACTION_FLAG = "flag comment";

trackingDelegate.track = function(data) {
    _gaq.push(['_trackEvent', data.category, data.action, data.label]);
    console.log('Tracking:');
    console.dir(data);
};

/* 
 * Event handlers for Core apps:
 * Comments, Chat, Blog, Reviews
 */
trackingDelegate.Core = {
    commentPosted: function(data) {
        var eventData = {
            category: this.CATEGORY,
            action: this.ACTION_COMMENT,
            label: window.location.href
        };
        this.track(eventData);

        // If poster shared to Facebook/Twitter, track as a share
        if ( (data.sharedToFacebook == true) || (data.sharedToTwitter == true)) {
            this.track({
                category: eventData.category,
                action: this.ACTION_SHARE,
                label: eventData.label
            });
        }
    },

    commentFlagged: function(data) {},
    commentLiked: function(data) {},
    commentShared: function(data) {}
    userLoggedIn: function(data) {},
    userLoggedOut: function(data) {},
    socialMention: function(data) {},
    attachmentClicked: function(data) {}
};

/* 
 * Reviews-specific events
 */
trackingDelegate.Reviews = {
    upVote: function(data) {},
    downVote: function(data) {},
};

trackingDelegate.Sidenotes = {
    commentFlagged: function(data) {},
    commentPosted: function(data) {},
    commentVoted: function(data) {
        if(data.type == 1) {
            // upvote
        } else if (data.type == 2) {}
            // downvote
        }
    },
    commentShared: function(data) {},
    userLoggedIn: function(data) {},
    userLoggedOut: function(data) {}
};

trackingDelegate.MediaWall = {
    contentClicked: function(data) {},
    loadMoreClicked: function(data) {
        // Consider adding a counter and tracking with opt_value in ga to track clicks / session
    },
    closeModal: function(data) {},
    twitterReply: function(data) {},
    twitterRetweet: function(data) {},
    twitterFavorite: function(data) {},
    contentShare: function(data) {},
    contentLike: function(data) {},
};
