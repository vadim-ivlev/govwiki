db.govs.find({ 
    $text : 
    { 
        $search: "+joint +board" 
    }
})



