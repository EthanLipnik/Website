import * as React from 'react'
import PrivacyView from '../../PrivacyView'

export default class NeptunePrivacyPage extends React.Component {
    render() {
        return (
            <div>
                <PrivacyView
                    appTitle="Neptune"
                    description="Neptune's use of information received from Twitter APIs will adhere to the Twitter User Data
            Policy, including the Limited Use requirements. Neptune does not send any user data to any other host or
            provider other than Twitter."
                    components={[
                        {
                            title: "Data Neptune saves locally",
                            details: ["User token(s)", "Tweet cache", "Bookmarks", "Profile(s)"]
                        },
                        {
                            title: "Data Neptune sends remotely to Twitter",
                            details: ["User token", "User request"]
                        },
                        {
                            title: "How the data is saved",
                            details: ["On-device."]
                        }
                    ]}
                />
            </div>
        )
    }
}