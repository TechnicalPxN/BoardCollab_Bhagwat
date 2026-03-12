# BoardCollab

Real-Time Collaborative Whiteboard Application.

## Tech Stack
React
Node.js
Express
MongoDB
Socket.IO

## Features
- Real-time collaborative drawing
- WebSocket synchronization
- Room based collaboration
- Multi-user whiteboard sessions

## Architecture

Client (React + Konva Canvas)
        ↓
WebSocket (Socket.IO)
        ↓
Node.js + Express Server
        ↓
MongoDB Persistence

## Real-Time Flow

1 User joins room  
2 Client connects using WebSocket  
3 Drawing events sent to server  
4 Server broadcasts event to other users  
5 All canvases update in real-time

## Future Improvements

- Redis based scaling
- CRDT conflict resolution
- Undo/Redo support
- Export canvas as PNG

## Author
Pappu Nagre
