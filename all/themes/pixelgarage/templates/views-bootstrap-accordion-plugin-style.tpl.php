<div id="views-bootstrap-accordion-<?php print $id ?>" class="<?php print $classes ?>">
  <?php foreach ($rows as $key => $row): ?>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a class="accordion-toggle collapsed"
             data-toggle="collapse"
             href="#collapse<?php print $key ?>">
            <?php if (!empty($time)): ?>
              <span class="tagungs-thema-time"><?php print $time[$key] ?></span>
            <?php endif; ?>
            <span class="tagungs-thema-title"><?php print $titles[$key] ?></span>
          </a>
        </h4>
      </div>

      <div id="collapse<?php print $key ?>" class="panel-collapse collapse">
        <div class="panel-body">
          <?php print $row ?>
        </div>
      </div>
    </div>
  <?php endforeach ?>
</div>