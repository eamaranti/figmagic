import { refresh } from './refresh';
//import { writeFile } from './writeFile';
import { write } from './write';

import { MsgWriteBaseFile } from '../messages/messages';
import { ErrorWriteBaseJson } from '../errors/errors';

/**
 * @description TODO
 *
 * @param outputFolderBaseFile TODO
 * @param outputFileName TODO
 * @param data TODO
 */
// TODO: Add proper types
export async function writeBaseJson(
  outputFolderBaseFile: string,
  outputFileName: string,
  data: object
): Promise<void> {
  if (!outputFolderBaseFile || !outputFileName || !data) throw new Error(ErrorWriteBaseJson);

  console.log(MsgWriteBaseFile);
  try {
    await refresh(outputFolderBaseFile);
    await write(`${outputFolderBaseFile}/${outputFileName}`, JSON.stringify(data));
  } catch (error) {
    throw new Error(error);
  }
}
