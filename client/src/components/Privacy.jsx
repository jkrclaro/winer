import React from 'react';


class Privacy extends React.Component {

    render() {
        return (
            <div className='container text-style'>
                <h1>Privacy Policy</h1>
                <p>
                    This policy applies to all information collected or 
                    submitted on Webprecon's website and our apps for 
                    iPhone and any other devices and platforms.
                </p>

                <h2>Information we collect</h2>
                <p>
                    When creating an account, you will be asked to enter an 
                    optional email address and a password. 
                    Email addresses are only used for logging in, 
                    password resets, responding to emails that you initiate, 
                    and notifications that you request. 
                    We don’t send promotional emails.
                </p>
                <p>
                    You may choose not to provide an email address and 
                    have an anonymous sync account instead.
                </p>
                <p>
                    We store information about your podcasts, episodes, and 
                    listening progress to sync this information between the 
                    website and your devices. We also collect anonymous 
                    statistics about which podcasts are most popular to 
                    help inform our recommendation engine.
                </p>

                <h2>Technical basics</h2>
                <p>
                    If you enable notifications, we must store a token to send them. 
                    We never use notifications for marketing.
                </p>
                <p>
                    If you upload files to Webprecon, 
                    we need to store them until you delete them.
                </p>
                <p>
                    If you subscribe to a password-protected podcast, 
                    we need to store the credentials you 
                    provide in order to keep it updated.
                </p>
                <p>
                    We use cookies on the site and similar tokens in the app 
                    to keep you logged in. Our server software may also store 
                    basic technical information, such as your IP address, in 
                    temporary memory or logs.
                </p>

                <h2>Cloudflare</h2>
                <p>
                    For performance and overload protection, 
                    we direct your traffic through Cloudflare before it reaches Webprecon's servers. 
                    They have access to some basic technical information to 
                    perform this role, such as your IP address. 
                    <a href='/' className='link'>Cloudflare’s privacy policy is here.</a>
                </p>

                <h2>Twitter accounts</h2>
                <p>
                    If you connect a Twitter account, episodes that you 
                    “recommend” may appear in Webprecon to people who follow 
                    you on Twitter, identifying you as the recommender.
                </p>
                <p>
                    Any podcasts you add to Webprecon may appear to your 
                    Twitter followers in their “Podcasts You Might Like” section.
                </p>
                <p>
                    We store a read-only Twitter login token to look up your 
                    Twitter username and avatar, and who you follow. 
                    Webprecon cannot post tweets, change your account, or 
                    read your private messages. You can revoke access to 
                    your Twitter account at any time.
                </p>

                <h2>Ads and analytics</h2>
                <p>
                    Webprecon's app collects aggregate, anonymous statistics, 
                    such as the percentage of users who use particular 
                    features, to improve the app.
                </p>
                <p>
                    No personal data is used to target Webprecon's ads except 
                    the categories of podcasts that you’re subscribed to, 
                    such as “Technology” or “Business”. Each ad collects, 
                    and shares with its advertiser, only three numbers: 
                    total views, total taps, and total subscriptions from the ad.
                </p>

                <h2>Information usage</h2>
                <p>
                    We use the information we collect to operate and 
                    improve our website, apps, and customer support.
                </p>
                <p>
                    We do not share personal information with outside 
                    parties except to the extent necessary to accomplish 
                    Webprecon's functionality. We may share anonymous, 
                    aggregate statistics with outside parties, such as how 
                    many people listen to a particular podcast with Webprecon.
                </p>
                <p>
                    We may disclose your information in response to subpoenas, 
                    court orders, or other legal requirements; to exercise 
                    our legal rights or defend against legal claims; to 
                    investigate, prevent, or take action regarding illegal 
                    activities, suspected fraud or abuse, violations of our 
                    policies; or to protect our rights and property.
                </p>
                <p>
                    In the future, we may sell to, buy, merge with, or 
                    partner with other businesses. In such transactions, 
                    user information may be among the transferred assets.
                </p>

                <h2>Security</h2>
                <p>
                    We implement a variety of security measures to help keep 
                    your information secure. For instance, all communication 
                    with the app and website requires HTTPS with certificate pinning. 
                    Passwords are hashed, not stored, using 
                    industry-standard methods (currently bcrypt).
                </p>

                <h2>Accessing, changing, or deleting your information</h2>
                <p>
                    You may access or change your information or delete 
                    your account from the Webprecon iOS app.
                </p>
                <p>
                    Deleted information may be kept in backups for up to 90 days. 
                    Backups are encrypted and are only accessed if needed 
                    for disaster recovery.
                </p>

                <h2>Third-party links and content</h2>
                <p>
                    Webprecon displays links and content from third-party 
                    podcast feeds and sites, and downloads podcast files 
                    directly from each podcast’s third-party servers. 
                    These have their own independent privacy policies, and 
                    we have no responsibility or liability for their 
                    content or activities.
                </p>

                <h2>California Online Privacy Protection Act Compliance</h2>
                <p>
                    We comply with the California Online Privacy Protection Act. 
                    We therefore will not distribute your personal information 
                    to outside parties without your consent.
                </p>

                <h2>Children’s Online Privacy Protection Act Compliance</h2>
                <p>
                    We never collect or maintain information at our website 
                    from those we actually know are under 13, and no part of 
                    our website is structured to attract anyone under 13.
                </p>

                <h2>Information for European Union Customers</h2>
                <p>
                    By using Webprecon and providing your information, 
                    you authorize us to collect, use, and store 
                    your information outside of the European Union.
                </p>

                <h2>International Transfers of Information</h2>
                <p>
                    Information may be processed, stored, and used outside of 
                    the country in which you are located. Data privacy laws 
                    vary across jurisdictions, and different laws may be 
                    applicable to your data depending on where it is 
                    processed, stored, or used.
                </p>

                <h2>Your consent</h2>
                <p>
                    By using our site or apps, you consent to our privacy policy.
                </p>

                <h2>Contacting us</h2>
                <p>
                    If you have questions regarding this privacy policy, 
                    you may email <a className='webprecon-link' href='mailto:webprecon@gmail.com'>webprecon@gmail.com</a>. Please note that 
                    account deletion should be done within the 
                    Webprecon app, not via email requests, for security reasons.
                </p>
            </div>
        );
    };
};

export default Privacy;
