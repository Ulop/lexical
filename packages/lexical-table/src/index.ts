/** @module @lexical/table */
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export type {GridSelection, GridSelectionShape} from './LexicalGridSelection';
export {$createGridSelection, $isGridSelection} from './LexicalGridSelection';
export type {SerializedTableCellNode} from './LexicalTableCellNode';
export {
  $createTableCellNode,
  $isTableCellNode,
  TableCellHeaderStates,
  TableCellNode,
} from './LexicalTableCellNode';
export type {
  InsertTableCommandPayload,
  InsertTableCommandPayloadHeaders,
} from './LexicalTableCommands';
export {INSERT_TABLE_COMMAND} from './LexicalTableCommands';
export type {SerializedTableNode} from './LexicalTableNode';
export {
  $createTableNode,
  $getElementForTableNode,
  $isTableNode,
  TableNode,
} from './LexicalTableNode';
export type {TableDOMCell} from './LexicalTableObserver';
export {TableObserver} from './LexicalTableObserver';
export type {SerializedTableRowNode} from './LexicalTableRowNode';
export {
  $createTableRowNode,
  $isTableRowNode,
  TableRowNode,
} from './LexicalTableRowNode';
export type {HTMLTableElementWithWithTableSelectionState} from './LexicalTableSelectionHelpers';
export {
  applyTableHandlers,
  getCellFromTarget,
  getTableObserverFromTableElement,
} from './LexicalTableSelectionHelpers';
export {
  $computeGridMap,
  $createTableNodeWithDimensions,
  $deleteTableColumn,
  $deleteTableColumn__EXPERIMENTAL,
  $deleteTableRow__EXPERIMENTAL,
  $getGridCellNodeRect,
  $getNodeTriplet,
  $getTableCellNodeFromLexicalNode,
  $getTableColumnIndexFromTableCellNode,
  $getTableNodeFromLexicalNodeOrThrow,
  $getTableRowIndexFromTableCellNode,
  $getTableRowNodeFromTableCellNodeOrThrow,
  $insertTableColumn,
  $insertTableColumn__EXPERIMENTAL,
  $insertTableRow,
  $insertTableRow__EXPERIMENTAL,
  $removeTableRowAtIndex,
  $unmergeCell,
} from './LexicalTableUtils';
