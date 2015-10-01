<div id="views-bootstrap-accordion-<?php print $id ?>" class="<?php print $classes ?>">
  <?php foreach ($rows as $key => $row): ?>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a class="accordion-toggle collapsed" href="#collapse<?php print $key ?>"
            <?php if ($toggling[$key]): ?>data-toggle="collapse"<?php endif; ?>>
            <?php if (!empty($time)): ?>
              <span class="tagungs-thema-time"><?php print $time[$key] ?></span>
            <?php endif; ?>
            <span class="tagungs-thema-title <?php if ($toggling[$key]): ?>expandable<?php endif; ?>">
              <?php print $titles[$key] ?>
              <?php if ($subtitle[$key]): ?><div class="subtitle"><?php print $subtitle[$key] ?></div><?php endif; ?>
              <?php if ($referent[$key]): ?><div class="referent"><?php print $referent[$key] ?></div><?php endif; ?>
            </span>
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
