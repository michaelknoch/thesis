// erforderliches markup
<canvas id="myChart" width="400" height="400"></canvas>

// Instanziierung ueber das DOM Element
<script>
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: [...],
          datasets: [...]
      },
      options: {...}
  });
</script>
