db.govs.find (
{$and:[
{gov_name: /mil/i},
{gov_name: /tow/i}
]}
)
