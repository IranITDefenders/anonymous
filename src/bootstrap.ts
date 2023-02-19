import {Anonymous} from '@core/entity/Anonymous';

export default function () {
  /**
   * @TODO: Clean the code and setup tsyringe container
   * @TODO: Make sure sure specific classes are singleton
   * @TODO: Ability to chain the processes.
   * @TODO: Make changes on database.
   * @TODO: Add sink package to add subscribers to it.
   */

  const anonymousBot = new Anonymous();
  anonymousBot.init();
}
