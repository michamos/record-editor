import { CommonApiService } from './common-api.service';
import { RecordApiService } from './record-api.service';
import { HoldingpenApiService } from './holdingpen-api.service';
import { AppConfigService } from './app-config.service';
import { RecordCleanupService } from './record-cleanup.service';
import { DomUtilsService } from './dom-utils.service';
import { RecordSearchService } from './record-search.service';
import { SavePreviewModalService } from './save-preview-modal.service';

export {
  CommonApiService,
  HoldingpenApiService,
  RecordApiService,
  AppConfigService,
  RecordCleanupService,
  DomUtilsService,
  RecordSearchService,
  SavePreviewModalService
};

export const CORE_SERVICES = [
  CommonApiService,
  HoldingpenApiService,
  RecordApiService,
  AppConfigService,
  RecordCleanupService,
  DomUtilsService,
  RecordSearchService,
  SavePreviewModalService
];
