// if (window.confirm("May we have access to your current location?")) {
	$(document).ready(function(){
	loc = $.getJSON('https://ipinfo.io', function(data) {
	var location = $("#location").html(data.city + ", ").append(data.region + " ").append(data.country)
    var url = "https://api.apixu.com/v1/forecast.json?key=44113d8b81834625abd14251170809&q=" + data.loc
		$.ajax({
			url: url,
			success: function(result) {
				var temp_title = result.current.condition.text
				$("#temp-title").text(temp_title);

				var temperature_f = result.current.temp_f
				var temperature_c = result.current.temp_c
				$("#temperature").text(temperature_f).append('°')

				var feelslike_f = result.current.feelslike_f
				var feelslike_c = result.current.feelslike_c
				$("#feels-like").text(feelslike_f)

				$("#celsius").click(function(){
					$("#celsius").css("background-color", "#334d4d")
					$("#fahrenheit").css("background-color", "#0099cc")
					$("#temperature").text(temperature_c).append('°')
					$("#feels-like").text(feelslike_c).append('°')
				});
				$("#fahrenheit").click(function(){
					$("#fahrenheit").css("background-color", "#334d4d")
					$("#celsius").css("background-color", "#0099cc")
					$("#temperature").text(temperature_f).append('°')
					$("#feels-like").text(feelslike_f).append('°')
				});

				var humidity = result.current.humidity
				$("#humidity").text(humidity)

				var wind_dir = result.current.wind_dir
				$("#wind-dir").text(wind_dir)

				var wind_kph = result.current.wind_kph
				var wind_mph = result.current.wind_mph
				$("#wind").text(wind_mph).append(' mph')

				$("#kph").click(function(){
					$("#kph").css("background-color", "#334d4d")
					$("#mph").css("background-color", "#0099cc")
					$("#wind").text(wind_kph).append(' kph')
				});

				$("#mph").click(function(){
					$("#mph").css("background-color", "#334d4d")
					$("#kph").css("background-color", "#0099cc")
					$("#wind").text(wind_mph).append(' mph')
				});
				
				var precipitation_in = result.current.precip_in
				var precipitation_mm = result.current.precip_mm
				$("#precipitation").text(precipitation_in).append(' in.')

				$("#mm").click(function(){
					$("#mm").css("background-color", "#334d4d")
					$("#precip-inches").css("background-color", "#0099cc")
					$("#precipitation").text(precipitation_mm).append(' mm')
				});
				$("#precip-inches").click(function(){
					$("#precip-inches").css("background-color", "#334d4d")
					$("#mm").css("background-color", "#0099cc")
					$("#precipitation").text(precipitation_in).append(' in.')
				});

				var pressure_in = result.current.pressure_in
				var pressure_mb = result.current.pressure_mb
				$("#pressure").text(pressure_in).append(' in.')
				$("#mb").click(function(){
					$("#mb").css("background-color", "#334d4d")
					$("#pressure-inches").css("background-color", "#0099cc")
					$("#pressure").text(pressure_mb).append(' mb')
				});
				$("#pressure-inches").click(function(){
					$("#pressure-inches").css("background-color", "#334d4d")
					$("#mb").css("background-color", "#0099cc")
					$("#pressure").text(pressure_in).append(' in.')
				})

				var sunrise = result.forecast.forecastday[0].astro.sunrise
				$("#sunrise").text(sunrise)
				var sunset = result.forecast.forecastday[0].astro.sunset
				$("#sunset").text(sunset)
				var moonrise = result.forecast.forecastday[0].astro.moonrise
				$("#moonrise").text(moonrise)
				var moonset = result.forecast.forecastday[0].astro.moonset
				$("#moonset").text(moonset)

				var weather = result.current.condition.text

				// WEATHER ICON ANIMARION
				var skycons = new Skycons({"color": "white"});
				  // on Android, a nasty hack is needed: {"resizeClear": true}

				  // if (weather == 'Party cloudy' && sunset == true) {
				  // 		skycons.add("icon1", Skycons.PARTLY_CLOUDY_NIGHT);
				  // } else if (weather == 'Sunny' && sunset == true) {
				  // 		skycons.add("icon1", Skycons.CLEAR_NIGHT);
				  // } else {
				  // you can add a canvas by it's ID...
				  switch(weather) {
				  	case 'Sunny':
				  	skycons.add("icon1", Skycons.CLEAR_DAY);
				  	break;
				  	// case 'Sunny' && sunset == true:
				  	// skycons.add("icon1", Skycons.CLEAR_NIGHT);
				  	// break;
				  	case 'Partly cloudy':
				  	skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);
				  	break;
				  	case 'Cloudy':
				  	case 'Overcast':
				  	skycons.add("icon1", Skycons.CLOUDY);
				  	break;
				  	case 'Patchy light drizzle':
				  	case 'Light drizzle':
				  	case 'Patchy light rain':
				  	case 'Light rain':
				  	case 'Moderate rain':
				  	case 'Moderate rain at times':
				  	case 'Heavy rain at times':
				  	case 'Heavy rain':
				  	skycons.add("icon1", Skycons.RAIN);
				  	case 'Patchy light snow':
				  	case 'Light snow':
				  	case 'Patchy moderate snow':
				  	case 'Moderate snow':
				  	case 'Heavy snow':
				  	case 'Light snow showers':
				  	case 'Moderate or heavy snow showers':
				  	case 'Blizzard':
				  	case 'Blowing snow':
				  	skycons.add("icon1", Skycons.SNOW)
				  	case 'Fog':
				  	case 'Freezing fog':
				  	skycons.add("icon1", Skycons.FOG)
				  	case 'Moderate or heavy sleet':
				  	case 'Light sleet':
				  	case 'Light sleet showers':
				  	case 'Moderate or heavy sleet showers':
				  	case 'Patch sleet possible':
				  	skycons.add("icon1", Skycons.SLEET)
				  	break;
				  	default:

				  }
				 skycons.play();
				// }
			}
		});
	})
});
// } else {
// 	alert("Error")
// }