import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | click-me', function(hooks) {
  setupRenderingTest(hooks);

  test('it does not issue jQuery deprecation warning', async function(assert) {
    assert.expect(0);
    await render(hbs`{{click-me}}`);
    await click('button');
  });
});
