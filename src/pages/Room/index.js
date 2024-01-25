import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

export default function RoomPage() {
    const { roomId } = useParams();
    const myMeeting = async(element) => {
        const appID = 1398035808;
        const serverSecret = "17d3151cec664ddeb39d3278f5a34627";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret , roomId, Date.now().toString(), "Yuvraj Jha");
        const zc =ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [{
                name: `Copy-Link`,
                url: `https://localhost/3000/room/`+roomId,
            }],
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
            showScreenSharingButton: true,
            showTurnOffRemoteMicrophoneButton: true
        })
    }
  return (
    <div>  
      <div ref={myMeeting} />
    </div>  
  )
}
