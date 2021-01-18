# BACKED STRUCTURE 

# API ROUTES
```javascript
get('/getMeeting')
```
If no Date query parameter given the route will get all the meetings<br/>
With date query parameter the route will get the meeting with that Date<br/>
```javascript
post('/createMeeting')
```
Creates meeting <br/>
```javascript
post('/updateMeeting')
```
Updates Meeting <br/>
```javascript
delete('/deleteMeeting')
```
Deletes Meeting by the Data query parameter given