var liens = $('a')

liens.each(function(){
  if (this.hostname !== document.domain) {
    this.target = "_blank"
  }
})
