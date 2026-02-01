$headers = @{
  "Accept"  = "application/json"
  "Origin"  = "https://www.partywitty.com"
  "Referer" = "https://www.partywitty.com/"
}

$body = @{
  city = "delhi"
  area = "all"
  club = "all"
}

Invoke-WebRequest `
  -Uri "https://admin.partywitty.com/master/APIs/Web/getClubDetails" `
  -Method POST `
  -Headers $headers `
  -Body $body