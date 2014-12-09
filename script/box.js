			  $(function() {
				$( "#dialog" ).dialog({
				  autoOpen: false,
				  show: {
					effect: "fade",
					duration: 1000
				  },
				  hide: {
					effect: "drop",
					duration: 1000
				  }
				});
			 
					 $( "#dialog" ).dialog({
					  width: 800
					});
			
				$( "#dialog" ).dialog({
				  position: { my: "center", at: "top", of: window }
				});

				$( "#opener" ).click(function() {
				  $( "#dialog" ).dialog( "open" );
				});
			  });